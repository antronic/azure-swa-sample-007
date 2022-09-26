import dayjs from 'dayjs'

export function convert (_date: string) {
  const startDate = dayjs(_date)
  const atikawanYears = [2500, 2506, 2513, 2516, 2522, 2530, 2533, 2540, 2543, 2549, 2552, 2559, 2563, 2568, 2575, 2578, 2586, 2589, 2595]

  const beginYear = 1957
  const checkYear = startDate.format('YYYY')
  let day_add = 0
}