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
        We generate new high quality data by following a simple multi-step
        process.
        <ExplainerRow>
          <img
            height={200}
            width={200}
            alt="Creating quality labels or translations"
            src="/svg/undraw_create_re_57a3.svg"
          />
          <ExplainerDetail>
            First, we create new translations or quality labels for the
            sentences we already have. When translating, we are helping to
            create new data for languages we each care about. When creating
            quality labels, we are helping figure out which sentences in our
            language are good and which may not actually be in our language.
          </ExplainerDetail>
        </ExplainerRow>
        <ExplainerRow>
          <ExplainerDetail>
            Next, for every translation or every quality tag, someone else in
            the collective double checks that the submission looks good and
            generally makes sense. When evaluating, you can either mark
            something as <b>correct</b> or
            <b>incorrect</b> or rate something on a sliding quality scale.
          </ExplainerDetail>
          <img
            height={200}
            width={200}
            alt="Rating quality labels or translations"
            src="/svg/undraw_reviews_lp8w.svg"
          />
        </ExplainerRow>
        <ExplainerRow>
          <img
            height={200}
            width={200}
            alt="Cross referencing ratings to find the best results"
            src="/svg/undraw_detailed_examination_re_ieui.svg"
          />
          <ExplainerDetail>
            Finally, after we have several submissions and reviews, we use a
            little bit of machine learning to figure out which translations and
            which labels meet our quality bar. We take into account how often
            reviewers agree with each other and when content might be a little
            unusual or more difficult than expected. Overall, based on multiple
            research papers, our approach helps produce extremely high quality
            data.
          </ExplainerDetail>
        </ExplainerRow>
        <ExplainerRow>
          <ExplainerDetail>
            The end result is a corpus of new language data that we created
            together. Overtime we will be adding even better support for
            collective data governance. Soon, collective members will be able to
            help decide what data we should create in the first place and then
            ultimately help decide what we do with the data we have created.
          </ExplainerDetail>
          <img
            height={200}
            width={200}
            alt="Creating together to make the best data"
            src="/svg/undraw_flowers_vx06.svg"
          />
        </ExplainerRow>
      </ExplainerContainer>
    </>
  )
}

export default HomePage
