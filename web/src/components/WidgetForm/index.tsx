import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem'
        }
    },
}

export type FeedBackType = keyof typeof feedbackTypes;

// Object.entries(feedbackTypes) =>
// [

// ['BUG', {...}], 
// ['IDEIA', {...}], 
// ['THOUGHT', {...}]

// ]

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null)

    function handleRestartFeedback() {
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep onFeedbackRestartRequested={handleRestartFeedback} feedbackType={feedbackType} />
            )}
            <footer className="text-xs text-neutral-400" >
                Feito com ♥ pela <a className="underline underline-offset-2" target='blanck' href="https://rocketseat.com.br">Rocketseat</a>
            </footer>

        </div>
    );
}