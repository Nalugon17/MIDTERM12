let records = [];
let recordId = 1;

function createRecord() {
    const FirstName = document.getElementById("FirstName").value;
    const MiddleName = document.getElementById("MiddleName").value;
    const LastName = document.getElementById("LastName").value;
    const Age = document.getElementById("Age").value;
    const Birthday = document.getElementById("Birthday").value;
    const Course = document.getElementById("Course").value;
    const SchoolYear = document.getElementById("SchoolYear").value;



    const newRecord = { id: recordId++, FirstName, MiddleName, LastName, Age, Birthday, Course, SchoolYear};
    records.push(newRecord);

    displayRecords();
    clearForm("create-form");
}

function displayRecords() {
    const recordList = document.getElementById("record-list");
    recordList.innerHTML = "";

    for (const record of records) {
        const li = document.createElement("li");
        li.innerHTML = `SchoolID: ${record.id}, FirstName: ${record.FirstName}, MiddleName: ${record.MiddleName}, LastName: ${record.LastName}, Age: ${record.Age}, Birthday: ${record.Birthday}, SchoolYear: ${SchoolYear}`;
        recordList.appendChild(li);
    }
}

function clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
}

function updateRecord() {
    const id = document.getElementById("update-id").value;
            const FirstName = document.getElementById("update-FirstName").value;
            const MiddleName = document.getElementById("update-MiddleName").value;
            const LastName = document.getElementById("update-LastName").value;
            const Age = document.getElementById("update-Age").value;
            const Birthday = document.getElementById("update-Birthday").value;
            const Course = document.getElementById("update-Course").value;
            const SchoolYear = document.getElementById("update-SchoolYear").value;
            const recordToUpdate = records.find(record => record.id == id);

            if (recordToUpdate) {
                if (FirstName) {
                    recordToUpdate.FirstName = FirstName;
                }
                if (MiddleName) {
                    recordToUpdate.MiddleName = MiddleName;
                }
                if (LastName) {
                    recordToUpdate.LastName = LastName;
                }
                if (Age) {
                    recordToUpdate.Age = Age;
                }
                if (Birthday) {
                    recordToUpdate.Birthday = Birthday;
                }
                if (Course) {
                    recordToUpdate.Course = Course;
                }
                if (SchoolYear) {
                    recordToUpdate.SchoolYear = SchoolYear;
                }
                displayRecords();
                clearForm("update-form");
            } else {
                alert("Record not found");
            }
        }
function deleteRecord() {
    const id = document.getElementById("delete-id").value;
    const index = records.findIndex(record => record.id == id);

    if (index !== -1) {
        records.splice(index, 1);
        displayRecords();
        clearForm("delete-form");
    } else {
        alert("Record not found");
    }
}

displayRecords();
