interface Config {
  /** @default true */
  trim?: boolean;
  /** @default true */
  lower?: boolean;
  /** @default " " */
  delimiter?: string;
  /** @default " " */
  separator?: string;
}

export function capitalize(subject: string, config: Config = {}) {
  config.trim = config.trim ?? true;
  config.lower = config.lower ?? true;
  config.delimiter = config.delimiter ?? ' ';
  config.separator = config.separator ?? ' ';

  if (config.trim) {
    subject = subject.trim();
  }

  if (config.lower) {
    subject = subject.toLowerCase();
  }

  if (subject.length === 0) return subject;

  return subject
    .split(config.delimiter)
    .map((word) => {
      return word.length === 0
        ? word
        : `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
    })
    .join(config.separator);
}
