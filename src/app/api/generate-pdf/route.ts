import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';


export const POST = async(request: Request) => {

  let { datosPresupuesto } = await request.json()

  console.log(datosPresupuesto)

  try {
    // Datos proporcionados
    const data = datosPresupuesto

    // Agrupar datos por mes
    const groupedData: Record<string, { ingresos: any[]; egresos: any[] }> = {};
    data.forEach((row: string[]) => {
      const mes = row[1]; // Columna del mes
      if (!groupedData[mes]) {
        groupedData[mes] = { ingresos: [], egresos: [] };
      }
      if (row[2] === 'Ingreso') {
        groupedData[mes].ingresos.push(row);
      } else if (row[2] === 'Egreso') {
        groupedData[mes].egresos.push(row);
      }
    });

    // Calcular totales por mes
    const totalesPorMes: Record<string, { ingresos: number; egresos: number }> = {};
    Object.keys(groupedData).forEach((mes) => {
      const ingresosTotal = groupedData[mes].ingresos.reduce((sum, row) => sum + row[6], 0); // Presupuesto
      const egresosTotal = groupedData[mes].egresos.reduce((sum, row) => sum + row[6], 0); // Presupuesto
      totalesPorMes[mes] = { ingresos: ingresosTotal, egresos: egresosTotal };
    });

    // Crear un nuevo libro de Excel
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Resumen');

    // Ajustar el ancho de las columnas
    worksheet.columns = [
      { header: 'Fecha', key: 'fecha', width: 20 },
      { header: 'Mes', key: 'mes', width: 15 },
      { header: 'Categoría', key: 'categoria', width: 20 },
      { header: 'Concepto', key: 'concepto', width: 30 },
      { header: 'Presupuesto', key: 'presupuesto', width: 15 },
      { header: 'Monto', key: 'monto', width: 15 },
    ];

    let currentRow = 1;

    // Procesar cada mes
    Object.keys(groupedData).forEach((mes) => {
      // Agregar título del mes (combinar celdas)
      worksheet.mergeCells(`A${currentRow}:F${currentRow}`);
      worksheet.getCell(`A${currentRow}`).value = mes;
      worksheet.getCell(`A${currentRow}`).font = { bold: true, size: 16 };
      worksheet.getCell(`A${currentRow}`).alignment = { horizontal: 'center' };
      worksheet.getRow(currentRow).height = 30; // Ajustar altura de la fila
      currentRow++;

      // Función para agregar una tabla (ingresos o egresos)
      const addTable = (title: string, rows: any[], fillColor: string) => {
        // Título de la tabla
        worksheet.getCell(`A${currentRow}`).value = title;
        worksheet.getCell(`A${currentRow}`).font = { bold: true };
        worksheet.getCell(`A${currentRow}`).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: fillColor },
        };
        worksheet.mergeCells(`A${currentRow}:F${currentRow}`); // Combinar celdas para centrar el título
        worksheet.getCell(`A${currentRow}`).alignment = { horizontal: 'center' }; // Centrar el texto
        currentRow++;
      
        // Encabezados de la tabla (sin la columna "Tipo")
        const headers = ['Fecha', 'Mes', 'Categoría', 'Concepto', 'Presupuesto', 'Monto'];
        const headerRow = worksheet.getRow(currentRow);
        headerRow.values = headers;
        headerRow.eachCell((cell) => {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: fillColor },
          };
          cell.font = { bold: true };
        });
        currentRow++;
        // Filas de datos
        rows.forEach((row) => {
          const rowData = [(row[0]).split("T")[0], row[1], row[3], row[4], row[5], row[6]]; // Excluir la columna "Tipo"
          const dataRow = worksheet.getRow(currentRow);
          dataRow.values = rowData;
          dataRow.eachCell((cell) => {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: fillColor },
            };
          });
          currentRow++;
        });
      
        currentRow++; // Espacio entre tablas
      };

      // Agregar tabla de ingresos
      addTable('Ingresos', groupedData[mes].ingresos, 'C6EFCE'); // Verde claro

      // Agregar tabla de egresos
      addTable('Egresos', groupedData[mes].egresos, 'FFC7CE'); // Rojo claro
    });

    // Agregar tabla de totales
    worksheet.getCell(`A${currentRow}`).value = 'Totales por Mes';
    worksheet.getCell(`A${currentRow}`).font = { bold: true, size: 16 };
    worksheet.mergeCells(`A${currentRow}:F${currentRow}`);
    worksheet.getCell(`A${currentRow}`).alignment = { horizontal: 'center' };
    worksheet.getRow(currentRow).height = 30; // Ajustar altura de la fila
    currentRow++;

    const totalHeaders = ['Mes', 'Total Ingresos', 'Total Egresos', 'Balance'];
    const totalHeaderRow = worksheet.getRow(currentRow);
    totalHeaderRow.values = totalHeaders;
    totalHeaderRow.eachCell((cell) => {
      cell.font = { bold: true };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFCC' }, // Amarillo claro
      };
    });
    worksheet.getRow(currentRow).height = 20; // Ajustar altura de la fila
    currentRow++;

    Object.keys(totalesPorMes).forEach((mes) => {
      const ingresos = totalesPorMes[mes].ingresos;
      const egresos = totalesPorMes[mes].egresos;
      const balance = ingresos - egresos;
      worksheet.addRow([mes, ingresos, egresos, balance]);
      worksheet.getRow(currentRow).height = 20; // Ajustar altura de la fila
      currentRow++;
    });

    // Guardar el archivo temporalmente
    const filePath = path.join(process.cwd(), 'public', 'datos_por_mes.xlsx');
    await workbook.xlsx.writeFile(filePath);

    // Leer el archivo y enviarlo como respuesta
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=datos_por_mes.xlsx',
      },
    });
  } catch (error) {
    console.error('Error al generar el archivo Excel:', error);
    return NextResponse.json({ error: 'Error al generar el archivo Excel' }, { status: 500 });
  }
}