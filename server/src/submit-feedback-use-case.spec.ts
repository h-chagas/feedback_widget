import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case"

describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async  () => {} },
      { sendMail: async  () => {} }
    )

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg',
    })).resolves.not.toThrow();
  })
})
