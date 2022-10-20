import Button from "../atoms/Button"
import Title from "../atoms/Title"
import Label from "../atoms/label"
import Subtitle from "../atoms/subtitle"
import React from "react"

interface Action {
  title: String
  variant?: "primary" | "secondary"
}
interface Section {
  id: React.Key
  backgroundImageUrl: String
  title: String
  subtitle?: String
  actions: Action[]
  info?: String
}
interface Props {
  sections: Section[]
}

function Home({ sections }: Props) {
  return (
    <React.Fragment>
      {sections.map((section) => (
        <div key={section.id} className="overflow-hidden">
          <div
            style={{
              backgroundImage: `url(${section.backgroundImageUrl})`
            }}
            className="flex flex-col h-screen bg-center bg-cover items-center justify-between text-center pt-28 pb-14"
          >
            <div>
              <Title text={section.title} />
              {section.subtitle ? (
                <Subtitle text={section.subtitle} />
              ) : undefined}
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-8 mb-8">
                {section.actions.map((action, index) => (
                  <Button
                    key={index.toString()}
                    title={action.title}
                    variant={action.variant}
                  />
                ))}
              </div>
              {section.info ? <Label text={section.info} /> : undefined}
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Home