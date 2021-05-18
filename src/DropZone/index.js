import React, { useCallback } from 'react';
import PropTypes from 'prop-types'
import ReactDropZone from 'react-dropzone';

const convertGBToBytes = (gb) => {
	const bytes = (1024 * 1024 * 1024) * gb
	return bytes
}

const getBase64 = async file =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = error => reject(error)
	})

const getAlertMessage = (array) => {
	let obj = ''
	array.forEach((item, index) => {
		item = item.trim()

		const getPrefix = () => {
			const common = `${obj && (index === array.length - 1 ? ' and ' : ', ')}`
			return `${obj}${common}*${item.includes('.') ? '' : '.'}`
		}

		if (item.split('/')[1]) {
			obj = `${getPrefix()}${item.split('/')[1]}`
		} else {
			obj = `${getPrefix()}${item}`
		}
	})

	return `Only ${obj} files are accepted`
}

export const DropZone = ({
	multiple,
	disabled,
	maxGB,
	formatSelectedFile = 'base64',
	onFileSelect,
	acceptedFileTypes = '.pdf, image/jpg'
}) => {
	const onDropFiles = useCallback(async (selectedFiles) => {
		console.log('useCallback triggered===')
		let modifiedSelectedFiles = selectedFiles
		switch (formatSelectedFile) {
			case 'base64':
				const modifiedFiles = []
				await Promise.all(selectedFiles.map(async (item) => {
					const result = await getBase64(item)
					return modifiedFiles.push(result)
				}))
				modifiedSelectedFiles = modifiedFiles
				break
			default:
				break
		}

		console.log(modifiedSelectedFiles)
		// uncomment and use with parent component
		// onFileSelect(modifiedSelectedFiles)
	}, [])

	return (
		<ReactDropZone
			onDrop={onDropFiles}
			multiple={multiple}
			disabled={disabled}
			maxSize={convertGBToBytes(maxGB)}
		>
			{({ getRootProps, getInputProps }) => (
				<section>
					<div {...getRootProps({ className: 'drop-zone-container' })}>

						<input {...getInputProps({ accept: acceptedFileTypes })} />

						<p>Drag 'n' drop some files here, or click to  files</p>

						<em>({getAlertMessage(acceptedFileTypes.split(','))})</em>
					</div>
				</section>
			)}
		</ReactDropZone>
	);
}

DropZone.defaultProps = {
	multiple: true,
	disabled: false,
	maxGB: 1
};

DropZone.propTypes = {
	multiple: PropTypes.bool,
	disabled: PropTypes.bool,
	maxGB: PropTypes.number,
	onFileSelect: PropTypes.func,
	acceptedFileTypes: PropTypes.string
}

export default DropZone;
