import React from 'react';
import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo'

const FLASHCARD_KEY = 'Personal:Flashcard';
const NOTIFICATION_KEY = 'Personal:Flashcard-notify';

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
      AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(decks));
    });
}

export function addCardToDeck(title, card) {
  return getDecks()
    .then(decks => ({
      ...decks,
      [title]: {
        ...decks[title],
        questions: decks[title].questions.concat([card])
      }
    }))
    .then((decks) => {
      return AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(decks));
    })
}

export function clearStorage () {
  AsyncStorage.removeItem(FLASHCARD_KEY);
}

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: 'Do a quiz!',
    body: "👋 It's best to quiz yourself everyday!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(12);
              tomorrow.setMinutes(7);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          })
      }
    })
}
