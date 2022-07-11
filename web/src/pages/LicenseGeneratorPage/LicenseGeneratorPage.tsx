import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { List, Message, Panel, Slider } from 'rsuite'

const standardPortion = `
This license covers the Data made available by Licensor to you (License) under
the following terms.  Licensees use of the data consists of acceptance of the
terms of this license agreement (License).

1.  Definitions

    1. Data means the informational content (individually or as a whole) made
    available by Licensor
    1. Model means machine-learning or artificial-intelligence based
    algorithms, or assemblies thereof that, in combination with different
    techniques, may be used to obtain certain results.  Without limitation,
    such results can be insights on past data patterns, predictions on future
    trends or more abstract results.
    1. Output means the results of operating a Trained Model as embodied in
    informational content resulting therefrom.
    1. Representation is a transformation of a piece of data into a different
    form. Good representations can be used as input to perform useful tasks.
    1. Representation is a transformation of a piece of data into a different
    form. Good representations can be used as input to perform useful tasks.
    1. Labelled Data means the associated metadata and informational content
    derived from Data which identify, comment or otherwise derive information
    1. Licensor means the individual or entity making the Data available to
    you.  from Data, such as tags and labels.
    1. Third Parties means individuals or entities that are not under common
    control with Licensee
    1. Train means to expose an Untrained Model to the Data in order to adjust
    the weights, hyperparameters and/or structure thereof
    1. Trained Model means a Model that is exposed to Data such that its
    weights, parameters and architecture embody insights from the Data
    1. Untrained Model means Model that is conceived and reduced to practice as
    to its structure, components and architecture but that has not been trained
    on Data such that its weights, parameters and architecture do not embody
    insights from the Data
1. General Clauses
    1. Unless otherwise agreed in writing by the parties, the data is licensed
    as is and as available. Licensor excludes all representations, warranties,
    obligations, and liabilities, whether express or implied, to the maximum
    extent permitted by law.
    1. Nothing in this License permits Licensee to make use of Licensors
    trademarks, trade names, logos or to otherwise suggest endorsement or
    misrepresent the relationship between the parties
    1. The rights granted under this license are deemed to be non-exclusive,
    worldwide, perpetual and irrevocable, unless otherwise specified in writing
    by Licensor.
    1. Without limiting Licensees rights available under applicable law, all
    rights not expressly granted hereunder are hereby reserved by Licensor. The
    Data and the database under which it is made available remain the property
    of Licensor (and/or its affiliates or licensors).
    1. This license shall be terminated upon any breach by Licensee of the
    terms of this License.
`

const attribution = `
1.  Attribution and Notice Attribution and Notice. The origin of the Data and
notices included with the Data shall be made available to Third Parties to whom
the Data, Output and/Model have been made available.  Any distribution of all
or part of the Data shall be done under the same terms as those of this
License. Licensee shall make commercially reasonable efforts to link to the
source of the Data. If so indicated by the Licensor in writing alongside the
Data that the use shall be deemed confidential, then Licensee shall not
publicly refer to Licensor and/or the source of the Data
`

const LicenseGeneratorPage = () => {
  const dataRightsClauses = [
    'Access the Data, where access means to access, view and/or download the Data to view it and evaluate it (evaluation algorithms may be exposed to it, but no Untrained Models).',
    'Creation of Tagged Data.',
    'Distribute the Data, i.e. to make all or part of the Data available to Third Parties under the same terms as those of this License.',
    'Creation of a Representation of the Data.'
  ]
  const dataRightsLabels = [
    'Access',
    'Tagging',
    'Distribution',
    'Representation',
  ]

  const modelRightsClauses = [
    'Benchmark: To access the Data, use the Data as training data to evaluate the efficiency of different Untrained Models, algorithms and structures, but excludes reuse of the Trained Model, except to show the results of the Training. This includes the right to use the dataset to measure performance of a Trained or Untrained Model, without however having the right to carry-over weights, code or architecture or implement any modifications resulting from the Evaluation.',
    'Research: To access the Data, use the Data to create or improve Models, but without the right to use the Output or resulting Trained Model for any purpose other than evaluating the Model Research under the same term.',
    'Publish: To make available to Third Parties the Models resulting from Research, provided however that third parties accessing such Trained Models have the right to use them for Research or Publication only.',
    'Internal Use: To access the Data, use the Data to create or improve Models and resulting Output, but without the right to Output Commercialization or Model Commercialization. The Output can be used internally for any purpose, but not made available to Third Parties or for their benefit.',
    'Output Commercialization: To access the Data, use the Data to create or improve Models and resulting Output, with the right to make the Output available to Third Parties or to use it for their benefit, without the right to Model Commercialization.',
    'Model Commercialization: Make a Trained Model itself available to a Third Party, or embodying the Trained Model in a product or service, with or without direct access to the Output for such Third Party.'
  ]
  const modelRightsLabels = [
    'Benchmark',
    'Research',
    'Publish',
    'Internal',
    'Output',
    'Full',
  ]

  const [dataRight, setDataRight] = useState(0)
  const [includedDataRights, setIncludedDataRights] =
    useState(dataRightsClauses.slice(0, 1))
  const [excludedDataRights, setExcludedDataRights] =
    useState(dataRightsClauses.slice(1))

  const [modelRight, setModelRight] = useState(0)
  const [includedModelRights, setIncludedModelRights] =
    useState(modelRightsClauses.slice(0, 1))
  const [excludedModelRights, setExcludedModelRights] =
    useState(modelRightsClauses.slice(1))

  const handleDataRightSelection = (rightIndex) => {
    setIncludedDataRights(dataRightsClauses.slice(0, rightIndex + 1))
    setExcludedDataRights(dataRightsClauses.slice(rightIndex + 1))
    setDataRight(rightIndex)
  }
  const handleModelRightSelection = (rightIndex) => {
    setIncludedModelRights(modelRightsClauses.slice(0, rightIndex + 1))
    setExcludedModelRights(modelRightsClauses.slice(rightIndex + 1))
    setModelRight(rightIndex)
  }

  return (
    <>
      <MetaTags title="LicenseGenerator" description="Generate a suitable Surface Data License" />

      <div className="flex flex-col gap-2">
        <h1>Surface Data License Generator</h1>

        <Message>
          The Surface Data License is based on the <a
            href="https://arxiv.org/pdf/1903.12262.pdf" target="_">Montreal Data
            License</a>
        </Message>

        <Panel header="Standard Portion" bordered>
          <ReactMarkdown className="markdown-body">
            {standardPortion}
          </ReactMarkdown>
        </Panel>

        <Panel header="Licensed Rights to the Data" bordered>
          <Slider
            className="h-32"
            min={0}
            max={dataRightsLabels.length - 1}
            value={dataRight}
            graduated
            progress
            vertical
            tooltip={false}
            renderMark={mark => dataRightsLabels[mark]}
            onChange={handleDataRightSelection}
          />

          <br/>

          <p>
            Licensor hereby grants the following rights to Licensee with respect
            to making use of the Data itself:
          </p>

          <br/>

          <List size="md" hover>
            {includedDataRights.map( (right, index) => (
              <List.Item key={`include-data-right-${index}`} index={index}>
                {right}
              </List.Item>
            ))}
          </List>

          <br/>

          <p>
            The rights granted in (a) above exclude the following rights with
            respect to making use of the Data itself:
          </p>
          <br/>
          <List size="md" hover>
            {excludedDataRights.map( (right, index) => (
              <List.Item key={`exclude-data-right-${index}`} index={index}>
                {right}
              </List.Item>
            ))}
          </List>
        </Panel>

        <Panel header="Licensed Rights to derived Models" bordered>
          <Slider
            className="h-64"
            min={0}
            max={modelRightsLabels.length - 1}
            value={modelRight}
            graduated
            progress
            vertical
            tooltip={false}
            renderMark={mark => modelRightsLabels[mark]}
            onChange={handleModelRightSelection}
          />

          <br/>

          <p>
            Licensor hereby grants the following rights to Licensee with respect
            to making use of the Data in conjunction with Models.
          </p>
          <br/>
          <List size="md" hover>
            {includedModelRights.map( (right, index) => (
              <List.Item key={`include-model-right-${index}`} index={index}>
                {right}
              </List.Item>
            ))}
          </List>

          <br/>

          <p>
            The rights granted in (a) above exclude the following rights with
            respect to making use of the Data in conjunction with Models:
          </p>
          <br/>
          <List size="md" hover>
            {excludedModelRights.map( (right, index) => (
              <List.Item key={`exclude-model-right-${index}`} index={index}>
                {right}
              </List.Item>
            ))}
          </List>
        </Panel>

        <Panel header="Attribution" bordered>
          <ReactMarkdown className="markdown-body">
            {attribution}
          </ReactMarkdown>
        </Panel>

        <Message type="warning">
          The authors are not legal advisors to the individuals and entities
          making use of these licensing terms.
        </Message>
      </div>
    </>
  )
}

export default LicenseGeneratorPage
