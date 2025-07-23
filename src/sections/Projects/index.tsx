import { useState } from 'react'
import {
  Container,
  Title,
  Filters,
  FilterButton,
  Grid,
  Card,
  CardTitle,
  CardDesc
} from './styles'
import { projectsData, type Project } from './data' // criamos abaixo

export const Projects = () => {
  const [filter, setFilter] = useState<string>('All')
  const categories = ['All', ...new Set(projectsData.map(p => p.category))]

  const filtered = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter)

  return (
    <Container id="projects">
      <Title>Projetos</Title>
      <Filters>
        {categories.map(cat => (
          <FilterButton
            key={cat}
            active={cat === filter}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </Filters>
      <Grid>
        {filtered.map((proj: Project) => (
          <Card
            key={proj.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <CardTitle>{proj.name}</CardTitle>
            <CardDesc>{proj.description}</CardDesc>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              Ver mais →
            </a>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}
