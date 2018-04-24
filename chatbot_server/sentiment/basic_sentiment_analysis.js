// Wrapper of ibm_sentiment to simplify categorization


// 0 is neutral, 1 is angry, 2 is joy
exports.categorize_emotion = function(anger_value, joy_value) {
  if (anger_value > 0.4 && joy_value < 0.4 ) {
    return 1; // Return angry
  } else if (anger_value < 0.4 && joy_value > 0.4) {
    return 2; // Return joy
  } else {
    return 0; // Return neutral
  }
}