import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiCreatereactapp } from "react-icons/si";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";

// Back End
import { SiExpress, SiDjango, SiFlask, SiRubyonrails, SiDotnet, SiSpringboot, SiGraphql, SiPostgresql, SiMongodb, SiRedis, SiDocker } from "react-icons/si";

// Integrations
import { SiZapier, SiAmazon, SiGooglecloud, SiStripe, SiTwilio, SiFirebase, SiRabbitmq, SiApachekafka } from "react-icons/si";
import { FaKey } from "react-icons/fa"; // For OAuth
import { MdWebhook } from "react-icons/md"; // For Webhooks

 // AI
import { SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, SiScikitlearn, SiKeras, SiSpacy, SiOpencv, SiJupyter, SiFastapi } from "react-icons/si";
import { FaRobot } from "react-icons/fa"; // For generic AI/ML platforms
import { FaBrain } from "react-icons/fa"; // For general AI

export const SKILLS = {
	react: {
		name: "React",
		icon: {
			normal: <FaReact size={24} color="#57C4DC" />,
			large: <FaReact size={32} color="#57C4DC" />,
		},
		type: "frontEnd",
	},
	styledComponnets: {
		name: "Styled Componnets",
		icon: {
			normal: <SiStyledcomponents size={24} color="#E38B87" />,
			large: <SiStyledcomponents size={32} color="#E38B87" />,
		},
		type: "frontEnd",
	},
	html: {
		name: "HTML",
		icon: {
			normal: <FaHtml5 size={24} color="#E96328" />,
			large: <FaHtml5 size={32} color="#E96328" />,
		},
		type: "frontEnd",
	},
	sass: {
		name: "Sass",
		icon: {
			normal: <IoLogoSass size={24} color="#CC6699" />,
			large: <IoLogoSass size={32} color="#CC6699" />,
		},
		type: "frontEnd",
	},
	javascipt: {
		name: "Javascipt",
		icon: {
			normal: <FaJs size={24} color="#F0DC55" />,
			large: <FaJs size={32} color="#F0DC55" />,
		},
		type: "frontEnd",
	},
	typescipt: {
		name: "Typescipt",
		icon: {
			normal: <SiTypescript size={24} color="#397CC9" />,
			large: <SiTypescript size={32} color="#397CC9" />,
		},
		type: "frontEnd",
	},
	redux: {
		name: "Redux",
		icon: {
			normal: <TbBrandRedux size={24} color="#7A50BE" />,
			large: <TbBrandRedux size={32} color="#7A50BE" />,
		},
		type: "frontEnd",
	},
	github: {
		name: "github",
		icon: {
			normal: <FaGithub size={24} color="#080808" />,
			large: <FaGithub size={32} color="#080808" />,
		},
		type: "other",
	},
	nodeJs: {
		name: "Node Js",
		icon: {
			normal: <RiNodejsLine size={24} color="#8EC618" />,
			large: <RiNodejsLine size={32} color="#8EC618" />,
		},
		type: "backEnd",
	},
	reactNative: {
		name: "React Native",
		icon: {
			normal: <SiCreatereactapp size={24} color="#33DFFE" />,
			large: <SiCreatereactapp size={32} color="#33DFFE" />,
		},
		type: "frontEnd",
	},
	android: {
		name: "Android",
		icon: {
			normal: <BsAndroid2 size={24} color="#A7C840" />,
			large: <BsAndroid2 size={32} color="#A7C840" />,
		},
		type: "frontEnd",
	},
	ios: {
		name: "IOS",
		icon: {
			normal: <FaApple size={24} color="#397CC9" />,
			large: <FaApple size={32} color="#397CC9" />,
		},
		type: "frontEnd",
	},
	vueJs: {
		name: "Vue Js",
		icon: {
			normal: <IoLogoVue size={24} color="#6DB586" />,
			large: <IoLogoVue size={32} color="#6DB586" />,
		},
		type: "frontEnd",
	},
	angularJs: {
		name: "Angular Js",
		icon: {
			normal: <FaAngular size={24} color="#B33335" />,
			large: <FaAngular size={32} color="#B33335" />,
		},
		type: "frontEnd",
	},
	jest: {
		name: "Jest",
		icon: {
			normal: <SiJest size={24} color="#C8431F" />,
			large: <SiJest size={32} color="#C8431F" />,
		},
		type: "frontEnd",
	},
	cypress: {
		name: "Cypress",
		icon: {
			normal: <TbBrandCypress size={24} color="#616163" />,
			large: <TbBrandCypress size={32} color="#616163" />,
		},
		type: "frontEnd",
	},

	// --- Back End ---
	express: {
		name: "Express",
		icon: {
			normal: <SiExpress size={24} color="#000000" />,
			large: <SiExpress size={32} color="#000000" />,
		},
		type: "backEnd",
	},
	django: {
		name: "Django",
		icon: {
			normal: <SiDjango size={24} color="#092E17" />,
			large: <SiDjango size={32} color="#092E17" />,
		},
		type: "backEnd",
	},
	flask: {
		name: "Flask",
		icon: {
			normal: <SiFlask size={24} color="#000000" />,
			large: <SiFlask size={32} color="#000000" />,
		},
		type: "backEnd",
	},
	rubyOnRails: {
		name: "Ruby on Rails",
		icon: {
			normal: <SiRubyonrails size={24} color="#CC0000" />,
			large: <SiRubyonrails size={32} color="#CC0000" />,
		},
		type: "backEnd",
	},
	dotnet: {
		name: ".NET",
		icon: {
			normal: <SiDotnet size={24} color="#512BD4" />,
			large: <SiDotnet size={32} color="#512BD4" />,
		},
		type: "backEnd",
	},
	springBoot: {
		name: "Spring Boot",
		icon: {
			normal: <SiSpringboot size={24} color="#6DB33F" />,
			large: <SiSpringboot size={32} color="#6DB33F" />,
		},
		type: "backEnd",
	},
	graphql: {
		name: "GraphQL",
		icon: {
			normal: <SiGraphql size={24} color="#E10098" />,
			large: <SiGraphql size={32} color="#E10098" />,
		},
		type: "backEnd",
	},
	postgresql: {
		name: "PostgreSQL",
		icon: {
			normal: <SiPostgresql size={24} color="#336791" />,
			large: <SiPostgresql size={32} color="#336791" />,
		},
		type: "backEnd",
	},
	mongodb: {
		name: "MongoDB",
		icon: {
			normal: <SiMongodb size={24} color="#47A248" />,
			large: <SiMongodb size={32} color="#47A248" />,
		},
		type: "backEnd",
	},
	redis: {
		name: "Redis",
		icon: {
			normal: <SiRedis size={24} color="#DC382D" />,
			large: <SiRedis size={32} color="#DC382D" />,
		},
		type: "backEnd",
	},
	docker: {
		name: "Docker",
		icon: {
			normal: <SiDocker size={24} color="#2496ED" />,
			large: <SiDocker size={32} color="#2496ED" />,
		},
		type: "backEnd",
	},
	elasticsearch: {
		name: "Elasticsearch",
		icon: {
			normal: <FaBrain size={24} color="#005571" />,
			large: <FaBrain size={32} color="#005571" />,
		},
		type: "backEnd",
	},
	rabbitmqBackend: {
		name: "RabbitMQ",
		icon: {
			normal: <SiRabbitmq size={24} color="#FF6600" />,
			large: <SiRabbitmq size={32} color="#FF6600" />,
		},
		type: "backEnd",
	},

	// --- Integrations ---
	zapier: {
		name: "Zapier",
		icon: {
			normal: <SiZapier size={24} color="#FF4F00" />,
			large: <SiZapier size={32} color="#FF4F00" />,
		},
		type: "integrations",
	},
	webhooks: {
		name: "Webhooks",
		icon: {
			normal: <MdWebhook size={24} color="#5A5A5A" />,
			large: <MdWebhook size={32} color="#5A5A5A" />,
		},
		type: "integrations",
	},
	oauth: {
		name: "OAuth",
		icon: {
			normal: <FaKey size={24} color="#4285F4" />,
			large: <FaKey size={32} color="#4285F4" />,
		},
		type: "integrations",
	},
	awsLambda: {
		name: "AWS Lambda",
		icon: {
			normal: <SiAmazon size={24} color="#FF9900" />,
			large: <SiAmazon size={32} color="#FF9900" />,
		},
		type: "integrations",
	},
	googleCloudFunctions: {
		name: "Google Cloud Functions",
		icon: {
			normal: <SiGooglecloud size={24} color="#4285F4" />,
			large: <SiGooglecloud size={32} color="#4285F4" />,
		},
		type: "integrations",
	},
	stripe: {
		name: "Stripe",
		icon: {
			normal: <SiStripe size={24} color="#635BFF" />,
			large: <SiStripe size={32} color="#635BFF" />,
		},
		type: "integrations",
	},
	twilio: {
		name: "Twilio",
		icon: {
			normal: <SiTwilio size={24} color="#F22F46" />,
			large: <SiTwilio size={32} color="#F22F46" />,
		},
		type: "integrations",
	},
	firebase: {
		name: "Firebase",
		icon: {
			normal: <SiFirebase size={24} color="#FFCA28" />,
			large: <SiFirebase size={32} color="#FFCA28" />,
		},
		type: "integrations",
	},
	rabbitmq: {
		name: "RabbitMQ",
		icon: {
			normal: <SiRabbitmq size={24} color="#FF6600" />,
			large: <SiRabbitmq size={32} color="#FF6600" />,
		},
		type: "integrations",
	},
	kafka: {
		name: "Kafka",
		icon: {
			normal: <SiApachekafka size={24} color="#231F17" />,
			large: <SiApachekafka size={32} color="#231F17" />,
		},
		type: "integrations",
	},
	slack: {
		name: "Slack",
		icon: {
			normal: <FaRobot size={24} color="#611f69" />,
			large: <FaRobot size={32} color="#611f69" />,
		},
		type: "integrations",
	},
	zendesk: {
		name: "Zendesk",
		icon: {
			normal: <FaRobot size={24} color="#03363d" />,
			large: <FaRobot size={32} color="#03363d" />,
		},
		type: "integrations",
	},
	mailgun: {
		name: "Mailgun",
		icon: {
			normal: <FaRobot size={24} color="#c17531" />,
			large: <FaRobot size={32} color="#c17531" />,
		},
		type: "integrations",
	},
	sendgrid: {
		name: "SendGrid",
		icon: {
			normal: <FaRobot size={24} color="#00B5E4" />,
			large: <FaRobot size={32} color="#00B5E4" />,
		},
		type: "integrations",
	},

	// --- AI ---
	tensorflow: {
		name: "TensorFlow",
		icon: {
			normal: <SiTensorflow size={24} color="#FF6F00" />,
			large: <SiTensorflow size={32} color="#FF6F00" />,
		},
		type: "ai",
	},
	pytorch: {
		name: "PyTorch",
		icon: {
			normal: <SiPytorch size={24} color="#EE4C2C" />,
			large: <SiPytorch size={32} color="#EE4C2C" />,
		},
		type: "ai",
	},
	openai: {
		name: "OpenAI",
		icon: {
			normal: <SiOpenai size={24} color="#412991" />,
			large: <SiOpenai size={32} color="#412991" />,
		},
		type: "ai",
	},
	huggingface: {
		name: "Hugging Face",
		icon: {
			normal: <SiHuggingface size={24} color="#FFD21F" />,
			large: <SiHuggingface size={32} color="#FFD21F" />,
		},
		type: "ai",
	},
	scikitlearn: {
		name: "scikit-learn",
		icon: {
			normal: <SiScikitlearn size={24} color="#F7931E" />,
			large: <SiScikitlearn size={32} color="#F7931E" />,
		},
		type: "ai",
	},
	keras: {
		name: "Keras",
		icon: {
			normal: <SiKeras size={24} color="#D00000" />,
			large: <SiKeras size={32} color="#D00000" />,
		},
		type: "ai",
	},
	spacy: {
		name: "spaCy",
		icon: {
			normal: <SiSpacy size={24} color="#09A3D5" />,
			large: <SiSpacy size={32} color="#09A3D5" />,
		},
		type: "ai",
	},
	nltk: {
		name: "NLTK",
		icon: {
			normal: <FaRobot size={24} color="#9CFF00" />,
			large: <FaRobot size={32} color="#9CFF00" />,
		},
		type: "ai",
	},
	opencv: {
		name: "OpenCV",
		icon: {
			normal: <SiOpencv size={24} color="#5C3EE8" />,
			large: <SiOpencv size={32} color="#5C3EE8" />,
		},
		type: "ai",
	},
	jupyter: {
		name: "Jupyter",
		icon: {
			normal: <SiJupyter size={24} color="#F37626" />,
			large: <SiJupyter size={32} color="#F37626" />,
		},
		type: "ai",
	},
	fastapi: {
		name: "FastAPI",
		icon: {
			normal: <SiFastapi size={24} color="#009688" />,
			large: <SiFastapi size={32} color="#009688" />,
		},
		type: "ai",
	},
	azureml: {
		name: "Azure ML",
		icon: {
			normal: <FaRobot size={24} color="#0078D4" />,
			large: <FaRobot size={32} color="#0078D4" />,
		},
		type: "ai",
	},
	awsSagemaker: {
		name: "AWS SageMaker",
		icon: {
			normal: <SiAmazon size={24} color="#FF9900" />,
			large: <SiAmazon size={32} color="#FF9900" />,
		},
		type: "ai",
	},
	googleAI: {
		name: "Google AI",
		icon: {
			normal: <SiGooglecloud size={24} color="#4285F4" />,
			large: <SiGooglecloud size={32} color="#4285F4" />,
		},
		type: "ai",
	},
	generalAI: {
		name: "General AI",
		icon: {
			normal: <FaBrain size={24} color="#FFB300" />,
			large: <FaBrain size={32} color="#FFB300" />,
		},
		type: "ai",
	},
};
