"use client";

import React, { useState, useMemo } from 'react';
import { dummyProjects, Project } from '@/utils/projects';
import {
  ProjectsContainer,
  PageHeader,
  FilterSection,
  FilterButton,
  ProjectsGrid,
  ProjectCard,
  TechnologiesContainer,
  TechBadge,
  ProjectLinks,
  EmptyState,
  StatsBar,
  StatItem,
} from './projects.styles';

type FilterType = 'all' | 'completed' | 'in-progress' | 'planned';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Calculate statistics
  const stats = useMemo(() => {
    return {
      total: dummyProjects.length,
      completed: dummyProjects.filter(p => p.status === 'completed').length,
      inProgress: dummyProjects.filter(p => p.status === 'in-progress').length,
      planned: dummyProjects.filter(p => p.status === 'planned').length,
    };
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return dummyProjects;
    }
    return dummyProjects.filter(project => project.status === activeFilter);
  }, [activeFilter]);

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <ProjectsContainer>
      <div className="content-wrapper">
        <PageHeader>
          <h1>My Projects</h1>
          <p className="subtitle">A showcase of my work and technical expertise</p>
        </PageHeader>

        <StatsBar>
          <StatItem>
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total Projects</div>
          </StatItem>
          <StatItem>
            <div className="stat-number">{stats.completed}</div>
            <div className="stat-label">Completed</div>
          </StatItem>
          <StatItem>
            <div className="stat-number">{stats.inProgress}</div>
            <div className="stat-label">In Progress</div>
          </StatItem>
          <StatItem>
            <div className="stat-number">{stats.planned}</div>
            <div className="stat-label">Planned</div>
          </StatItem>
        </StatsBar>

        <FilterSection>
          <FilterButton
            $active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </FilterButton>
          <FilterButton
            $active={activeFilter === 'completed'}
            onClick={() => setActiveFilter('completed')}
          >
            Completed
          </FilterButton>
          <FilterButton
            $active={activeFilter === 'in-progress'}
            onClick={() => setActiveFilter('in-progress')}
          >
            In Progress
          </FilterButton>
          <FilterButton
            $active={activeFilter === 'planned'}
            onClick={() => setActiveFilter('planned')}
          >
            Planned
          </FilterButton>
        </FilterSection>

        <ProjectsGrid>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id}>
                <div className="project-header">
                  <h2 className="project-title">{project.title}</h2>
                  <span className={`status-badge ${project.status}`}>
                    {project.status}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-meta">
                  <div className="project-dates">
                    📅 {formatDate(project.startDate)}
                    {project.endDate && ` - ${formatDate(project.endDate)}`}
                  </div>

                  <TechnologiesContainer>
                    {project.technologies.map((tech, index) => (
                      <TechBadge key={index}>{tech}</TechBadge>
                    ))}
                  </TechnologiesContainer>

                  {(project.liveUrl || project.githubUrl) && (
                    <ProjectLinks>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live-demo"
                        >
                          🚀 Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github"
                        >
                          💻 GitHub
                        </a>
                      )}
                    </ProjectLinks>
                  )}
                </div>
              </ProjectCard>
            ))
          ) : (
            <EmptyState>No projects found for the selected filter.</EmptyState>
          )}
        </ProjectsGrid>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
