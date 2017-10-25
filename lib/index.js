/**
 * QUESTION
 *
 * Why does `jest` not like these?
 * export * from './hocs'
 * export * from './messages'
 */
import { WithCloudinary, WithIntl } from './hocs'
import { messages } from './messages'
import styles from './constants'

export { messages, styles, WithCloudinary, WithIntl }
