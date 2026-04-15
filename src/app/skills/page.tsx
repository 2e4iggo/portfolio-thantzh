"use client";

import React from "react";
import {
  SkillsContainer,
  PageHeader,
  SkillsGrid,
  SkillCategory,
  CategoryHeader,
  SkillsList,
  SkillItem,
  SkillTags,
  SkillTag,
  SoftSkillsSection,
  SoftSkillsHeader,
  SoftSkillsGrid,
  SoftSkillCard,
  HighlightBanner,
} from "./skills.styles";

const Skills = () => {
  return (
    <SkillsContainer>
      <div className="content-wrapper">
        <PageHeader>
          <h1>Technical Skills</h1>
          <p className="subtitle">Comprehensive expertise in modern software development</p>
        </PageHeader>

        <SkillsGrid>
          {/* Backend Development */}
          <SkillCategory $delay={0.1}>
            <CategoryHeader>
              <span className="icon">⚙️</span>
              <h3>Backend Development</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillItem>
                <div className="skill-title">Languages</div>
                <SkillTags>
                  <SkillTag>C# (.NET Framework)</SkillTag>
                  <SkillTag>.NET 8/10</SkillTag>
                  <SkillTag>TypeScript (Learning)</SkillTag>
                </SkillTags>
              </SkillItem>
              <SkillItem>
                <div className="skill-title">Frameworks</div>
                <SkillTags>
                  <SkillTag>ASP.NET Core</SkillTag>
                  <SkillTag>Web API</SkillTag>
                  <SkillTag>Entity Framework Core</SkillTag>
                </SkillTags>
              </SkillItem>
              <SkillItem>
                <div className="skill-title">Architecture</div>
                <SkillTags>
                  <SkillTag>Monolithic & Microservices</SkillTag>
                  <SkillTag>RESTful API Design</SkillTag>
                  <SkillTag>OOP Principles</SkillTag>
                </SkillTags>
              </SkillItem>
            </SkillsList>
          </SkillCategory>

          {/* Database Management */}
          <SkillCategory $delay={0.2}>
            <CategoryHeader>
              <span className="icon">🗄️</span>
              <h3>Database Management</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillItem>
                <div className="skill-title">Systems</div>
                <SkillTags>
                  <SkillTag>Microsoft SQL Server (MSSQL)</SkillTag>
                </SkillTags>
              </SkillItem>
              <SkillItem>
                <div className="skill-title">Expertise</div>
                <SkillTags>
                  <SkillTag>Advanced Query Optimization</SkillTag>
                  <SkillTag>Stored Procedures</SkillTag>
                  <SkillTag>Relational Schema Design</SkillTag>
                  <SkillTag>Database Indexing</SkillTag>
                  <SkillTag>Data Integrity & Security</SkillTag>
                </SkillTags>
              </SkillItem>
            </SkillsList>
          </SkillCategory>

          {/* Enterprise Systems */}
          <SkillCategory $delay={0.3}>
            <CategoryHeader>
              <span className="icon">🏢</span>
              <h3>Enterprise Systems</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillItem>
                <div className="skill-title">ERP & HRMS</div>
                <div className="skill-content">
                  Deep experience in Payroll Automation, Tax Compliance Logic, and Financial Management Systems (FMS)
                </div>
              </SkillItem>
              <SkillItem>
                <div className="skill-title">Business Logic</div>
                <div className="skill-content">
                  Translating complex regulatory requirements into automated software workflows
                </div>
              </SkillItem>
            </SkillsList>
          </SkillCategory>

          {/* Modern Tools & DevOps */}
          <SkillCategory $delay={0.4}>
            <CategoryHeader>
              <span className="icon">🛠️</span>
              <h3>Modern Tools & DevOps</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillItem>
                <div className="skill-title">Version Control</div>
                <SkillTags>
                  <SkillTag>Git</SkillTag>
                  <SkillTag>GitHub</SkillTag>
                </SkillTags>
              </SkillItem>
              <SkillItem>
                <div className="skill-title">Environment</div>
                <SkillTags>
                  <SkillTag>Visual Studio 2022</SkillTag>
                  <SkillTag>VS Code</SkillTag>
                  <SkillTag>Azure Fundamentals</SkillTag>
                </SkillTags>
              </SkillItem>
              <SkillItem>
                <div className="skill-title">AI Integration</div>
                <SkillTags>
                  <SkillTag>LLM Implementation</SkillTag>
                  <SkillTag>OpenAI/Semantic Kernel</SkillTag>
                  <SkillTag>Prompt Engineering</SkillTag>
                  <SkillTag>RAG (Retrieval-Augmented Generation)</SkillTag>
                </SkillTags>
              </SkillItem>
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>

        {/* Soft Skills Section */}
        <SoftSkillsSection>
          <SoftSkillsHeader>
            <h2>Core Competencies</h2>
          </SoftSkillsHeader>

          <SoftSkillsGrid>
            <SoftSkillCard>
              <div className="icon">🎖️</div>
              <h4>Operational Discipline</h4>
              <p>8 years of military-grade precision and reliability</p>
            </SoftSkillCard>

            <SoftSkillCard>
              <div className="icon">🚨</div>
              <h4>Crisis Management</h4>
              <p>Staying calm and analytical during system-critical failures</p>
            </SoftSkillCard>

            <SoftSkillCard>
              <div className="icon">🧩</div>
              <h4>Problem Solving</h4>
              <p>Advanced diagnostic skills developed in medical and software fields</p>
            </SoftSkillCard>

            <SoftSkillCard>
              <div className="icon">📚</div>
              <h4>Adaptive Learning</h4>
              <p>Ability to rapidly master new technologies and frameworks</p>
            </SoftSkillCard>
          </SoftSkillsGrid>
        </SoftSkillsSection>

        <HighlightBanner>
          <h3>🎯 What Sets Me Apart</h3>
          <p>
            My unique combination of military discipline, medical diagnostic precision, and enterprise software expertise 
            enables me to deliver mission-critical systems with unwavering reliability. I approach every project with 
            the same level of dedication and attention to detail that defines life-or-death medical operations.
          </p>
        </HighlightBanner>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
