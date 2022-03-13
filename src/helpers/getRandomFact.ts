export default async () => {
  try {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json');

    if (!response.ok) {
      throw new Error();
    }

    const result = await response.json();

    return result.text;
  } catch (_) {
    alert('Something went wrong');
  }
};
