import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";

import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";

export default function Appointment(props) {

  // Determine the initial mode based on the presence of props.interview
const initialMode = props.interview ? SHOW : EMPTY;

// Use the useVisualMode hook with the initialMode
const { mode, transition, back } = useVisualMode(initialMode);

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === SHOW ?
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => console.log("CONFIRM")}
          onEdit={() => console.log("EDIT")}
          mode={SHOW}
        />
        :
        <Empty onAdd={() => console.log("CREATE")} mode={EMPTY} />}
    </article>
  );
}
