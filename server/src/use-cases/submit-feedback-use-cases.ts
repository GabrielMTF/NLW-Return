import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    coment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, coment, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            coment,
            screenshot,
        })
    }
}