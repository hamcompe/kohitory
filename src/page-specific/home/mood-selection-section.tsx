import React, {Fragment} from 'react'
import styled from '@emotion/styled'

const SectionWrapper = styled.section`
  /* max-width: 40rem; */
  /* margin: 0 auto; */
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  cursor: pointer;

  border: 3px solid #111;
  padding: 0.75rem;

  border-left-width: 0;
  &:first-of-type {
    border-left-width: 3px;
  }
`

const MoodTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`
const MoodDescription = styled.span``
const MoodSelectionWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  align-items: stretch;
  align-content: center;
  margin-left: auto;
  margin-right: auto;

  input[type='radio'] {
    display: none;
  }
  input[type='radio']:checked + ${Label} {
    background: #111;
    color: #f1f1f1;
  }

  margin-bottom: 4.5rem;
`

const Title = styled.h2`
  margin-top: 3.5rem;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.3;
`
const TitleDescription = styled.p`
  font-weight: 500;
  margin-bottom: 1.25rem;
  color: #666;
`

export default ({possibleMoods, selected, onSelect}) => (
  <SectionWrapper>
    <Title>What’s your mood today?</Title>
    <TitleDescription>Select coffee beans amount:</TitleDescription>
    <MoodSelectionWrapper>
      {possibleMoods.map(mood => (
        <Fragment key={`mood-${mood.value}`}>
          <input
            type="radio"
            id={`mood-${mood.value}`}
            name="mood"
            value={mood.value}
            checked={`${selected}` === `${mood.value}`}
            onChange={e => onSelect(e.target.value)}
          />
          <Label htmlFor={`mood-${mood.value}`}>
            <MoodTitle>{mood.label}</MoodTitle>
            <MoodDescription>{mood.value}g</MoodDescription>
          </Label>
        </Fragment>
      ))}
    </MoodSelectionWrapper>
  </SectionWrapper>
)
