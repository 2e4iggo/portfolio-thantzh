"use client";

import {
	ProfessionalSummaryContainer,
	SummaryHeader,
	SummaryCard,
	HighlightBadges,
	Badge,
	StatsSection,
	StatCard,
} from "./page.styles";

export default function Home() {
	return (
		<ProfessionalSummaryContainer>
			<div className="content-wrapper">
				<SummaryHeader>
					<h1 className="main-title">Professional Summary</h1>
					<p className="subtitle">
						Senior Software Engineer | .NET & SQL Specialist | Enterprise Systems Expert
					</p>
				</SummaryHeader>

				<SummaryCard>
					<p className="description">
						A disciplined Senior Engineer with <strong>16 years of professional experience</strong>, 
						including <strong>8 years architecting ERP & HRMS solutions</strong> using C# and MSSQL. 
						Leveraging a strong 8-year foundation in Military Medical Service, I bring exceptional 
						operational discipline and problem-solving skills to complex software environments. 
						Currently specializing in <strong>Modern .NET (8/10)</strong> and <strong>AI-integrated 
						systems</strong>, I excel at transforming intricate business logic into scalable, 
						high-performance enterprise applications.
					</p>
				</SummaryCard>

				<HighlightBadges>
					<Badge>C# & .NET Expert</Badge>
					<Badge>MSSQL Database Architect</Badge>
					<Badge>ERP & HRMS Systems</Badge>
					<Badge>AI Integration</Badge>
					<Badge>Enterprise Solutions</Badge>
					<Badge>Military Discipline</Badge>
				</HighlightBadges>

				<StatsSection>
					<StatCard>
						<div className="stat-number">16+</div>
						<div className="stat-label">Years Experience</div>
					</StatCard>
					<StatCard>
						<div className="stat-number">8</div>
						<div className="stat-label">Years in ERP/HRMS</div>
					</StatCard>
					<StatCard>
						<div className="stat-number">8</div>
						<div className="stat-label">Years Medical Service</div>
					</StatCard>
				</StatsSection>
			</div>
		</ProfessionalSummaryContainer>
	);
}
