# Word Scramble Game Enhancements

## Description
<!-- Briefly describe the purpose of this PR. What changes does it introduce? -->
This PR introduces the following improvements to the Word Scramble game:
- Dynamic difficulty system with word classifications (Common/Rare/Exclusive/Legendary)
- Streak bonuses for consecutive correct answers
- Live input validation with partial-match feedback
- Enhanced animations (shake, score pulse, celebrations)
- Refactored scoring system with time/streak/difficulty bonuses
- Improved accessibility and mobile responsiveness

## Related Issue
<!-- If this PR addresses an issue, reference it here (e.g., "Fixes #123") -->
Fixes #<!-- ISSUE_NUMBER --> 

## Type of Change
<!-- Check all that apply -->
- [ ] Bug fix
- [x] New feature
- [x] Code refactor
- [x] UI/UX improvement
- [ ] Documentation update
- [ ] Other (please describe)

## Screenshots/Videos
<!-- Add screenshots or screen recordings to showcase visual changes -->
| Before | After |
|--------|-------|
| Old screenshot | New screenshot |

## Checklist
<!-- Verify your work by checking these boxes -->
- [x] My code follows the project's style guidelines
- [x] I’ve tested my changes on mobile and desktop
- [x] I’ve added/updated relevant documentation (if applicable)
- [x] All new and existing tests pass (if applicable)

## Testing Steps
<!-- How to test these changes? -->
1. Play the game and verify:
   - Correct answers trigger celebrations
   - Wrong answers show shake animation
   - Partial matches highlight in green
2. Check score calculation:
   - Faster guesses award more points
   - Streaks (3+ correct) add bonus points
   - Legendary words give highest rewards
3. Test responsiveness on mobile devices

## Notes for Reviewers
<!-- Any specific areas you'd like reviewers to focus on? -->
- Pay special attention to the scoring logic in `script.js`
- Verify word classification consistency in `words.js`

## Deployment Notes
<!-- Special instructions for deployment (if any) -->
No database/migration changes. Pure frontend updates.
