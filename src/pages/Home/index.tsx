import { Play } from 'phosphor-react';
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I'm going to work on </label>
          <TaskInput id="task" list="task-suggestions" placeholder="Name your project" />
          <datalist id="task-suggestions">
            <option value="Project 1"></option>
            <option value="Project 2"></option>
            <option value="Banana"></option>
            <option value="Ananas"></option>
          </datalist>

          <label htmlFor="minutesAmount"> For</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
