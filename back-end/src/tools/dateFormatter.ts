function time(locale: string = "pt-br"): string {
  return new Date(Date.now()).toLocaleTimeString(locale);
};

function date(locale: string = "pt-br"): string {
  return new Date(Date.now()).toLocaleDateString(locale);
};

function formated(locale: string = "pt-br"): string {
  return `${date(locale)} ${time(locale)}`;
};

const formatter = {
  time,
  date,
  formated
};

export default formatter;