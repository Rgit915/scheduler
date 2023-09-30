import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";

import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";


export default function Appointment(props) {

  // Determine the initial mode based on the presence of props.interview
const initialMode = props.interview ? SHOW : EMPTY;

// Use the useVisualMode hook with the initialMode
const { mode, transition, back } = useVisualMode(initialMode);

return (
  <article className="appointment" data-testid="appointment">
    <Header time={props.time} />
    {/* Render components based on the mode */}
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} mode={EMPTY} />}
    {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />
    )}
    {mode === CREATE && (
        <Form
          interviewers={props.interviewers} // Pass interviewers prop to Form
          onCancel={back}
        />
      )}
  </article>
);
}
