import React from 'react'
import classNames from 'classnames'
import { useFeatureStore } from './store'

const Card = ({ gradient, children, id }) => {
    const inViewFeature = useFeatureStore((state) => state.inViewFeature)

  return (
    <div
        className={classNames(
            "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity",
            gradient,
            inViewFeature === id ? "opacity-100" : "opacity-0"
        )}
    >
        {children}
    </div>
  )
}

export const Todo = ({ id }) => {
    return (
        <Card id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
            <span/>
        </Card>
    )
}

export const Colors = ({ id }) => {
  return (
    <Card id={id} gradient="from-[#f7f0ff] to-[#addeff]">
      <span />
    </Card>
  );
};

export const Availability = ({ id }) => {
  return (
    <Card id={id} gradient="from-[#f7f0ff] to-[#adf8ff]">
      <span />
    </Card>
  );
};

export const Music = ({ id }) => {
  return (
    <Card id={id} gradient="from-[#f7f0ff] to-[#adffd8]">
      <span />
    </Card>
  );
};

export const SchedulingLinks = ({ id }) => {
  return (
    <Card gradient="from-[#f7f0ff] to-[#ffd8ad]">
      <span />
    </Card>
  );
};

export const Team = ({ id }) => {
  return (
    <Card id={id} gradient="from-[#f7f0ff] to-[#ffade1]">
      <span />
    </Card>
  );
};