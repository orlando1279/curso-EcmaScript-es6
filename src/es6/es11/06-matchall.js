const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Bannana, Kiwi, Apple, Orange, etc, etc';

for (const mactch of fruit.matchAll(regex)) {
    console.log(mactch);
}