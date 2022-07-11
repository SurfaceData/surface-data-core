import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Trans } from 'react-i18next'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 24px;
  margin: 16px 0px;
`

const Text = styled.div`
  font-size: 18px;
  margin: 8px 24px;
`

const ExplainerContainer = styled.div`
  font-size: 16px;
  text-align: left;
`

const ExplainerRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
`

const ExplainerDetail = styled.div`
  width: 60%;
  margin: auto;
`

const HomePage = () => {
  return (
    <>
      <Title>Together we make the data for language technology.</Title>

      <Text>
        Surface is on a mission to build datasets for the worlds languages.
        These datasets are built, owned, and governed by all contributors. That
        means you help decide what we build and what we do with that data.
      </Text>

      <Title>How we create</Title>

      <ExplainerContainer>
        <Text>
          We build open source tools that make it easy for communities to
          govern, and later manage, their own datasets.
        </Text>

        <ExplainerRow>
          <a target="_" href="https://catalog.surfacedata.org/">
            <img
              height={200}
              width={200}
              alt="Managing your dataset as a commons"
              src="/svg/undraw_flowers_vx06.svg"
            />
          </a>
          <ExplainerDetail>
            <p>(In Development)</p>
            <br />
            First, we're building a data catalog that ensures any datasets you
            create stay within your oversight. We make it easy to distribute
            your data through HuggingFace Datasets while at the same time
            retaining the rights to always review who wishes to use the dataset
            and approve them on a case by case basis.
            <p>
              Test out our demo{' '}
              <a target="_" href="https://catalog.surfacedata.org/">
                catalog
              </a>
            </p>
          </ExplainerDetail>
        </ExplainerRow>

        <ExplainerRow>
          <ExplainerDetail>
            <p>(In Planning)</p>
            <br />
            Next, we're making it easier for communities to collect their own
            datasets by capturing content you're already writing. We plan to
            start by collecting data published to publications powered by{' '}
            <a target="_" href="https://ghost.org/">
              Ghost
            </a>
            . The extracted raw data will be collated into raw easy to use
            machine learning datasets that can be managed by the Catalog.
          </ExplainerDetail>
          <img
            height={200}
            width={200}
            alt="Collecting new datasets for your language"
            src="/svg/undraw_detailed_examination_re_ieui.svg"
          />
        </ExplainerRow>
        <ExplainerRow>
          <img
            height={200}
            width={200}
            alt="Curating the data you're collecting"
            src="/svg/undraw_reviews_lp8w.svg"
          />
          <ExplainerDetail>
            <p>(In Planning)</p>
            <br />
            Knowing that not all datasets are clean, we're later going to build
            data curation tools that let communities annotate, review, and
            cleanup datasets. To make this work for everyone our key feature
            will be support for both online and offline contributions so that
            community members don't need to always be connected to a network.
          </ExplainerDetail>
        </ExplainerRow>
      </ExplainerContainer>
    </>
  )
}

export default HomePage
