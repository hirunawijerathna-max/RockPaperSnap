
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const COLORS = {
  background: '#FFFFFF',
  surface: '#F8FAFC',
  text: '#1E293B',
  secondaryText: '#64748B',
  border: '#E2E8F0',
  rock: '#EF4444',
  paper: '#0D9488',
  scissors: '#D97706',
};

export default function RulesScreen() {

  return (

    <ScrollView
      contentContainerStyle={styles.container}
    >

      <Text style={styles.header}>
        Game Rules 📋
      </Text>

      {/* Rules card */}
      <View style={styles.card}>

        <Text style={styles.ruleText}>
          ✊ <Text style={[styles.bold, { color: COLORS.rock }]}>
            Rock
          </Text> crushes Scissors
        </Text>

        <Text style={styles.ruleText}>
          ✌️ <Text style={[styles.bold, { color: COLORS.scissors }]}>
            Scissors
          </Text> cuts Paper
        </Text>

        <Text style={styles.ruleText}>
          ✋ <Text style={[styles.bold, { color: COLORS.paper }]}>
            Paper
          </Text> covers Rock
        </Text>

      </View>

      {/* Description */}
      <Text style={styles.description}>
        Select one of the three weapons from the
        main play arena. The computer will randomly
        select its weapon, and the winner is decided
        based on the classic rules above.
      </Text>

      <Text style={styles.footer}>
        🏆 First to conquer the arena wins!
      </Text>

    </ScrollView>

  );
}

// Styles
const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    padding: 25,
  },

  header: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 30,
    marginTop: 20,
    color: COLORS.text,
    letterSpacing: 1,
  },

  card: {
    backgroundColor: COLORS.surface,
    padding: 25,
    borderRadius: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 30,
  },

  ruleText: {
    fontSize: 22,
    marginVertical: 12,
    color: COLORS.text,
    fontWeight: '600',
  },

  bold: {
    fontWeight: '900',
  },

  description: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: COLORS.secondaryText,
    paddingHorizontal: 10,
  },

  footer: {
    fontSize: 17,
    fontWeight: '800',
    color: COLORS.text,
    marginTop: 30,
    textAlign: 'center',
  },

});
