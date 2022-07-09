/*Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
To test your code, use the three student objects listed below. Using the three student objects, produce the following values from the getReportCard and courseReport methods respectively.
*/

// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      console.log(this.courses);
    },
  };
}

// eslint-disable-next-line max-lines-per-function
function createSchool() {
  return {
    students: [],
    VALID_YEAR: ['1st', '2nd', '3rd', '4th', '5th' ],

    addStudent(name, year) {
      if (!this.VALID_YEAR.includes(year)) {
        console.log('Invalid Year');
      } else {
        let student = createStudent(name, year);
        this.students.push(student);
      }
    },

    enrollStudent(studentName, course) {
      this.students.forEach(student => {
        if (student.name === studentName) {
          student.addCourse(course);
        }
      });
    },

    addGrade(studentName, courseName, grade) {
      this.students.forEach(student => {
        if (student.name === studentName) {
          student.courses.forEach(course => {
            if (course.name === courseName) {
              course['grade'] = grade;
            }
          });
        }
      });
    },

    getReportCard(studentName) {
      this.students.forEach(student => {
        if (student.name === studentName) {
          student.courses.forEach(course => {
            if (!course.hasOwnProperty('grade')) {
              console.log(`${course.name}: In Progress`);
            } else {
              console.log(`${course.name}: ${course.grade}`);
            }
          });
        }
      });
    },

    // eslint-disable-next-line max-lines-per-function
    courseReport(courseName) {
      let courseStudents = this.students.filter(student => {
        return student.courses.some(course => course.name === courseName);
      });
      let studentAverages = courseStudents.map(student => {
        let studentGrade;
        student.courses.forEach(course => {
          if (course.name === courseName) {
            studentGrade = [student.name, course.grade];
          }
        });
        return studentGrade;
      });
      if (studentAverages.some(grade => grade[1] === undefined)) {
        console.log(undefined);
      } else {
        console.log(`=${courseName} Grades=`);
        studentAverages.forEach(course => {
          console.log(`${course[0]}: ${course[1]}`);
        });
        console.log(`---`);
        // eslint-disable-next-line max-len
        let average = studentAverages.reduce((a, b) => a + b[1], 0);
        console.log(`Course Average: ${average / studentAverages.length}`);
      }
    },
  };
}

let ridgemont = createSchool();
ridgemont.addStudent('foo', '3rd');
ridgemont.addStudent('bar', '1st');
ridgemont.addStudent('qux', '2nd');
ridgemont.enrollStudent('foo', { name: 'Math', code: 101, grade: 95});
ridgemont.enrollStudent('foo', { name: 'Advanced Math', code: 102, grade: 90});
ridgemont.enrollStudent('foo', { name: 'Physics', code: 202 });
ridgemont.enrollStudent('bar', { name: 'Math', code: 101, grade: 91});
ridgemont.enrollStudent('qux', { name: 'Math', code: 101, grade: 93});
ridgemont.enrollStudent('qux', { name: 'Advanced Math', code: 102, grade: 90});
ridgemont.getReportCard(`foo`);
ridgemont.courseReport('Math');
ridgemont.courseReport('Advanced Math');
ridgemont.courseReport('Physics');