import React from 'react';
import { AsyncStorage } from 'react-native';

const FLASHCARD_KEY = 'Personal:Flashcard';

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARD_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        return {};
      } else {
        return data;
      }
    })
}

export function getDeck(id) {
  return getDecks()
    .then((decks) => decks[id])
}

export function saveDeckTitle(title) {
  return getDecks()
    .then(decks => ({
      ...decks,
      [title]: {
        title,
        questions: []
      }
    }))
    .then((decks) => {
      return AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(decks));
    });
}

export function addCardToDeck(title, questionAndAnswer) {
  return getDecks()
    .then(decks => ({
      ...decks,
      [title]: {
        ...decks[title],
        questions: decks[title].questions.concat([questionAndAnswer])
      }
    }))
    .then((decks) => {
      return AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(decks));
    })
}
