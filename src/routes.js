/**
 * ROUTES
 */

const routes = {
	default: '/',
	reactHookFormExamples: '/react-hook-form-examples',
	styledCompExample: '/styled-comp-example',
	reactCloneElementExample1: '/react-clone-element-example1',
	reactCloneElementExample2: '/react-clone-element-example2',
	reactFileUpload: '/react-file-upload',
	form: '/form',
	dynamicForm: '/form-dynamic',
	reactDropZoneExample: '/react-drop-zone-example',
	reactCompWay1: '/react-comp-example1',
	reactCompWay2: '/react-comp-example2',
}

export const linkArray = [
	{ key: 'default', to: routes.default, name: 'Home' },
	{ key: 'reactHookFormExamples', to: routes.reactHookFormExamples, name: 'React Hook Form Example' },
	{ key: 'styledCompExample', to: routes.styledCompExample, name: 'Styled Component' },
	{ key: 'reactCloneElementExample1', to: routes.reactCloneElementExample1, name: 'React Clone Ele - Example1' },
	{ key: 'reactCloneElementExample2', to: routes.reactCloneElementExample2, name: 'React Clone Ele - Example2' },
	{ key: 'reactFileUpload', to: routes.reactFileUpload, name: 'React File Upload' },
	{ key: 'form', to: routes.form, name: 'Form' },
	{ key: 'dynamicForm', to: routes.dynamicForm, name: 'Dynamic Form' },
	{ key: 'reactDropZoneExample', to: routes.reactDropZoneExample, name: 'React DropZone' },
	{ key: 'reactCompWay1', to: routes.reactCompWay1, name: 'React Com Way 1' },
	{ key: 'reactCompWay2', to: routes.reactCompWay2, name: 'React Com Way 2' },
]

export default routes
