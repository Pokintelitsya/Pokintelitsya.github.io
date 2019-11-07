const searchParams = new URLSearchParams(window.location.search);
const jobUID = searchParams.get('uid');
const comeetToken = '1B16C4BD7005131B1A26F391B1';
const comeetID = 'B1.001';
const jobDetailsUrl = `https://www.comeet.co/careers-api/2.0/company/${comeetID}/positions/${jobUID}?token=${comeetToken}&details=true`;

fetchJobDetails();

function fetchJobDetails() {
    fetch(jobDetailsUrl)
        .then(jobResponse => {
            if(jobResponse.ok) {
                jobResponse.json().then(jobDetails =>insertJobDetails(jobDetails));
            }
        });
}


function insertJobDetails(jobDetails) {
    if(!jobUID) {
        window.location.replace('/career_template.html');
        return;
    }
    const jobTitleElement = document.getElementById('job-title');
    const jobInfoElement = document.getElementById('job-info');
    const jobDetailsElement = document.getElementById('job-details');
    const mailtoElement = document.getElementById('mailto');
    let jobDetailsHtml = "";


    jobTitleElement.innerHTML = jobDetails.name;
    jobInfoElement.innerHTML = getJobInfoTemplate(jobDetails);
    jobDetails.details.forEach(detailsPart => {
        detailsPart.value = detailsPart.value.replace(/(<p><br><\/p>)+/g, '');
        jobDetailsHtml += `<h3>${detailsPart.name}</h3> ${detailsPart.value}`;
    });
    jobDetailsElement.innerHTML = jobDetailsHtml;
    mailtoElement.href = `mailto:${jobDetails.email}`;
    mailtoElement.innerText = jobDetails.email;
}

function getJobInfoTemplate(job) {
    if(job.location && job.location.country === 'IL') {
        job.location.country = 'Israel';
    }
    job.employment_type = job.employment_type ? job.employment_type : "Full-time";
    job.experience_level = job.experience_level ? `<span class="jobs__level">${job.experience_level}</span>` : '';
    return `
                    <span class="jobs__location">
                        ${job.location.city}, ${job.location.country}
                    </span>
                    <span class="jobs__type">
                        ${job.employment_type}
                    </span>
                     ${job.experience_level}`
}

//Apply form methods:

window.OW = window.OW || {};

OW.careers = {
    filesAllowed : ['.pdf', '.doc', '.docx'],
    initForm: function() {
        const formElement = document.getElementById('apply-form');
        if ( ! formElement )
            return;

        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(el => {
            el.addEventListener('click', (event) => {
                event.target.innerText = '';
            });
        });

        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            const fileAttached = this.checkForFile(formElement);
            if ( fileAttached )
                this.formSend(formElement);

            return false;
        });

        this.initFileUpload();
    },
    formSend: function(form) {
        var url = `https://www.comeet.co/careers-api/1.0/company/B1.001/positions/${jobUID}/apply?token=1B16C4BD7005131B1A26F391B1`;

        document.getElementById('apply-form-error').innerText = '';

        fetch(url, {
            body: new FormData(form),
            cache: 'no-cache',
            method: 'POST',
        }).then(sendFormResponse => {
            if(sendFormResponse.ok) {
                this.onFormSuccess();
            } else {
                sendFormResponse.json().then(sendFormJson=>this.onFormError(sendFormJson.message));
            }
        });

        return false;
    },
    onFormSuccess: function() {
        document.getElementById('apply-form').style.display = 'none';
        document.getElementById('form-success').style.display = 'flex';
    },
    onFormError: function(message) {
        document.getElementById('apply-form-error').innerText = message;
    },
    checkForFile: function() {
        const fileUploadEl		= document.getElementById('file-upload'),
            errorEl	= document.getElementById('upload-error'),
            fileInput	=document.getElementById('upload-input');

        if ( fileInput.files && fileInput.files[0] )
            return true;
        fileUploadEl.classList.add('empty');
        errorEl.innerText = 'Please add a file';
        errorEl.classList.add('show');
        window.setTimeout(() => {
            errorEl.classList.remove('show');
        }, 300);
        fileInput.focus();

        return false;
    },
    initFileUpload: function() {
        const fileUploadEl		= document.getElementById('file-upload'),
            errorEl	= document.getElementById('upload-error'),
            fileTargetEl = document.getElementById('file-target'),
            fileNameEl = document.getElementById('file-name'),
            removeFileEl = document.getElementById('remove-file'),
            fileInput	=document.getElementById('upload-input');

        fileInput.addEventListener('change', () => {
            if ( !(fileInput && fileInput.files && fileInput.files[0]) )
                return false;

            let filename = fileInput.files[0].name,
                allowed = false;

            for ( let i = 0; i < this.filesAllowed.length; i++ ) {
                if ( filename.indexOf(this.filesAllowed[i]) > -1 )
                    allowed = true;
            }

            errorEl.classList.remove('show');
            fileTargetEl.classList.remove('active');

            if ( allowed ) {
                fileNameEl.innerText = filename;
                fileUploadEl.classList.remove('empty');
            } else {
                fileUploadEl.classList.add('empty');
                fileInput.val('');
                errorEl.innerText = 'Unsupported format';
                errorEl.classList.add('show');
                window.setTimeout(() => {
                    errorEl.classList.remove('show');
                }, 300);
            }

            return false;
        });

        removeFileEl.addEventListener('click', () => {
            errorEl.classList.remove('show');
            fileNameEl.innerText = '';
            fileTargetEl.classList.remove('active');
            fileUploadEl.classList.add('empty');
            fileInput.val('');
        });

        fileTargetEl.addEventListener('dragenter', () => {fileTargetEl.classList.add('active');});
        fileTargetEl.addEventListener('dragover', () => {fileTargetEl.classList.add('active');});

        fileTargetEl.addEventListener('blur', () => {fileTargetEl.classList.remove('active');});
        fileTargetEl.addEventListener('dragleave', () => {fileTargetEl.classList.remove('active');});

        fileInput.addEventListener('focus', () => {fileTargetEl.classList.add('active');});

        fileInput.addEventListener('blur', () => {fileTargetEl.classList.remove('active');});
    }
};

OW.careers.initForm();


