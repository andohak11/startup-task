import config from 'config';

export default async () => {
  try {
    const response = await fetch(config.factsApi as string);

    if (!response.ok) {
      throw new Error();
    }

    const result = await response.json();

    return Promise.resolve(result.text);
  } catch (_) {
    alert('Something went wrong');
    return Promise.reject();
  }
};
