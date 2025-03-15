function dateFormatter(locale: string, date: Date): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default dateFormatter;
