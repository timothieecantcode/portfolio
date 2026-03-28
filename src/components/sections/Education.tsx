import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { motion } from 'framer-motion'

const EducationSection = styled.section`
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`

const EducationContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  border: none;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.light};
  line-height: 1.1;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: ${theme.colors.accent};
    margin: 8px auto 0;
    border-radius: 2px;
  }
`

const EducationCard = styled(motion.div)`
  background: ${theme.colors.glass.card};
  border-radius: 16px;
  padding: ${theme.spacing.lg};
`

const University = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`

const Degree = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  color: ${theme.colors.textLight};
  opacity: 0.9;
  margin-bottom: ${theme.spacing.sm};
  line-height: 1.6;
`

const Meta = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  color: ${theme.colors.textLight};
  opacity: 0.75;
  line-height: 1.6;
  margin: 0;
`

export const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <EducationSection id="education" role="region" aria-label="Education">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle variants={itemVariants} role="heading" aria-level={2}>
            Education
          </SectionTitle>
          <EducationContent>
            <EducationCard variants={itemVariants}>
              <University>University of Adelaide</University>
              <Degree>Bachelor of Engineering (Software)</Degree>
              <Meta>2022 – 2027 · GPA: 5.6 / 7</Meta>
            </EducationCard>
          </EducationContent>
        </motion.div>
      </div>
    </EducationSection>
  )
}
