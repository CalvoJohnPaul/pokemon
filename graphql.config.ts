import type {CodegenConfig} from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config({
	path: '.env.local',
	debug: true,
});

const config: CodegenConfig = {
	debug: true,
	verbose: true,
	schema: process.env.NEXT_PUBLIC_POKEAPI,
	documents: 'graphql/**/*.gql',
	overwrite: true,
	ignoreNoDocuments: true,
	generates: {
		'graphql/index.ts': {
			plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
			config: {
				gqlImport: 'graphql-request#gql',
				skipTypename: true,
				enumsAsTypes: true,
				declarationKind: 'interface',
				defaultScalarType: 'unknown',
				onlyOperationTypes: true,
				disableDescriptions: true,
				namingConvention: {
					typeNames: 'change-case-all#pascalCase',
					transformUnderscore: true,
				},
				scalars: {
					jsonb: '{[key:string]:any}',
				},
			},
		},
	},
};

export default config;
