interface Props {
    loading: boolean;
    text: string;
    loadgingText: string;
}

export const LoadingButton = ({ loading, text, loadgingText }:Props) => {
    return (
        <button
           type="submit"
           disabled={loading}
           className={`w-full flex items-center justify-center py-3 px-4 mt-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
             loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
           } transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:scale-[1.02] active:scale-[0.98]`}
         >
           {loading ? (
             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
           ) : null}
           {loading ? loadgingText : text}
            {!loading && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
         </button>
    )
}