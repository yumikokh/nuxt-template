import _ from 'lodash'

export function resetAll() {
  localStorage.removeItem('key')
}

export function store(value: string) {
  localStorage.setItem('key', value)
}

export function restore(): string {
  const val = localStorage.getItem('key')
  return val && JSON.parse(val)
}
