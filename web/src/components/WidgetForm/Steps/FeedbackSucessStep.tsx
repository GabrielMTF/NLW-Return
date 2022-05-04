import { CloseButton } from "../../CloseButton";

interface FeedbackSucessStepProps {
    onFeedbackTypeRequested: () => void;
}

export function FeedbackSucessStep({onFeedbackTypeRequested}: FeedbackSucessStepProps) {

    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]" >
                <svg width="251" height="72" viewBox="0 0 251 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M143.5 34C143.5 36.209 141.709 38 139.5 38H111.5C109.291 38 107.5 36.209 107.5 34V6C107.5 3.791 109.291 2 111.5 2H139.5C141.709 2 143.5 3.791 143.5 6V34Z" fill="#77B255" />
                    <path d="M136.78 8.36202C135.624 7.61102 134.076 7.94002 133.322 9.09802L122.436 25.877L117.407 21.227C116.393 20.289 114.811 20.352 113.874 21.365C112.937 22.379 112.999 23.961 114.013 24.898L121.222 31.564C121.702 32.009 122.312 32.229 122.918 32.229C123.591 32.229 124.452 31.947 125.017 31.09C125.349 30.584 137.517 11.82 137.517 11.82C138.268 10.661 137.938 9.11302 136.78 8.36202V8.36202Z" fill="white" />
                </svg>

                <span className="text-xl mt-2">
                    Agradecemos o Feedback!
                </span>

                <button onClick={onFeedbackTypeRequested} className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
                    Quero enviar outro
                </button>

            </div>
        </>
    )
}