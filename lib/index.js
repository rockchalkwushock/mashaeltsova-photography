/**
 * QUESTION
 *
 * Why does `jest` not like these?
 * export * from './hocs'
 * export * from './messages'
 */
import { WithIntl } from './hocs'
import { messages } from './messages'

export { messages, WithIntl }
