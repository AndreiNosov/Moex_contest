import React from "react";

/**
 * src\pages\UploadForm.js
 * @returns 
 */
export default function UploadFormFC() {
	return (
		<form
			className="form_upload"
			id="uploadForm"
			enctype="multipart/form-data">
			<label className="form_upload__label" for="uploadForm_File">
				<div >
					<div className="text_preview__upload">
						<p><span>Click to upload</span> or drag and drop</p>
						<p>SVG, PNG, JPG or GIF (max. 3MB)</p>
					</div>
				</div>
				<div className="form_file__upload">
					<div className="demo_wrapper">

						<span className="form_upload__title">document_file_name.pdf</span>
						<span className="form_upload_size">100</span>
						<span className="form_upload_descrip">Loading</span>
						<div className="indicator_upload">
							<span></span>
						</div>
					</div>

				</div>

				<input className="form_upload__input"
					id="uploadForm_File"
					type="file"
					name="file_name"
				/>
			</label>

		</form>
	)
}