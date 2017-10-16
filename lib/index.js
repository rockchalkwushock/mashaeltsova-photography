/**
 * QUESTION
 *
 * Why does `jest` not like these?
 * export * from './hocs'
 * export * from './messages'
 */
import { getBookingInfo } from './api'
import Page from './hocs'
import { messages } from './messages'

export { getBookingInfo, messages, Page }
