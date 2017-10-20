/**
 * QUESTION
 *
 * Why does `jest` not like these?
 * export * from './hocs'
 * export * from './messages'
 */
import { getBookingInfo } from './api'
import { PageWithData, PageWithoutData } from './hocs'
import { messages } from './messages'
import styles from './constants'

export { getBookingInfo, messages, PageWithData, PageWithoutData, styles }
