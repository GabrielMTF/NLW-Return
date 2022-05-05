import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repositoy';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-cases';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9d46ff6e1b9855",
        pass: "358412c48cdb38"
    }
});

routes.post('./feedbacks', async (req, res) => {
    const { type, coment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository
    )

    await submitFeedbackUseCase.execute({
        type,
        coment,
        screenshot,
    })

    // await transport.sendMail({
    //     from: 'Equipe Feedget <emailex@feedget.com>',
    //     to: 'Gabriel Mota <gabrielmota287@gmail.com>',
    //     subject: 'Novo feedback',
    //     html: [
    //         `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
    //         `<p>Tipo do feedback: ${type}</p>`,
    //         `<p>Comentário do feedback: ${coment}</p>`,
    //         `</div>`
    //     ].join('\n')
    // })

    return res.status(201).send()
})