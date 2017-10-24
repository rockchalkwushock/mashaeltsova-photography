/**
 * QUESTION
 *
 * Why does `jest` not like these?
 * export * from './hocs'
 * export * from './messages'
 */
import { getBookingInfo, isProd } from './api'
import { PageWithData, PageWithoutData, WithCloudinary } from './hocs'
import { messages } from './messages'
import styles from './constants'

export {
  getBookingInfo,
  isProd,
  messages,
  PageWithData,
  PageWithoutData,
  styles,
  WithCloudinary
}
