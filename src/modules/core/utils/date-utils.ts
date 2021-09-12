import enUS from 'date-fns/locale/en-US'
import formatRelativeDateFns from 'date-fns/formatRelative'

export namespace DateUtils {
  export const removeTime = (date: Date): Date => new Date(date.toDateString())

  export const addDays = (date: Date, numOfDaysToAdd: number): Date => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + numOfDaysToAdd)
    return newDate
  }

  export const isToday = (date: Date) =>
    date.getDate() === new Date().getDate() &&
    date.getMonth() === new Date().getMonth() &&
    date.getFullYear() === new Date().getFullYear()

  export const formatRelative = (date: Date) => {
    const formatRelativeLocale = {
      lastWeek: "'Last' eeee",
      yesterday: "'Yesterday'",
      today: "'Today'",
      tomorrow: "'Tomorrow'",
      nextWeek: "'Next' eeee",
      other: 'dd.MM.yyyy',
    }

    const locale = {
      ...enUS,
      formatRelative: (token: string) => formatRelativeLocale[token],
    }

    return formatRelativeDateFns(date, new Date(), { locale })
  }
}
