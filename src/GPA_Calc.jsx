import { useState } from 'react'
import './App.css'

function App() {
  const [classes, setClasses] = useState([
    {
      id: 1,
      semester: '',
      year: '',
      className: '',
      creditHours: '',
      grade: ''
    }
  ])

  const [creditHours, setCreditHours] = useState(0)
  const [gpaPoints, setGpaPoints] = useState(0)
  const [activeCreditHours, setActiveCreditHours] = useState(0)
  const [gpa, setGpa] = useState(0)

  const addClass = () => {
    setClasses([...classes, {
      id: Date.now(),
      semester: '',
      year: '',
      className: '',
      creditHours: '',
      grade: ''
    }])
  }

  const removeClass = (id) => {
    setClasses(classes.filter((course) => course.id !== id))
  }

  const handleChange = (id, field, value) => {
    setClasses(classes.map((course) => {
      if (course.id === id) {
        return { ...course, [field]: value }
      }
      return course
    }))
  }

  const calculateGPA = (event) => {
    event.preventDefault()

    const grades = {
      A: 4.0,
      'A-': 3.7,
      'B+': 3.3,
      B: 3.0,
      'B-': 2.7,
      'C+': 2.3,
      C: 2.0,
      'C-': 1.7,
      'D+': 1.3,
      D: 1.0,
      'D-': 0.7,
      F: 0.0
    }

    let totalCredits = 0
    let totalPoints = 0

    classes.forEach((course) => {
      let credits = Number(course.creditHours)
      let grade = course.grade.toUpperCase().trim()

      if (
        course.semester.trim() !== '' &&
        course.year !== '' &&
        course.className.trim() !== '' &&
        credits > 0 &&
        credits <= 99 &&
        grades[grade] !== undefined
      ) {
        totalCredits += credits
        totalPoints += credits * grades[grade]
      }
    })

    setCreditHours(totalCredits)
    setGpaPoints(totalPoints)
    setActiveCreditHours(totalCredits)

    if (totalCredits > 0) {
      setGpa(totalPoints / totalCredits)
    } else {
      setGpa(0)
    }
  }

  return (
    <div className="App">
      <h1>GPA Calculator</h1>

      <div id="GPA_info">
        <form onSubmit={calculateGPA}>
          <table>
            <thead>
              <tr>
                <th>Semester</th>
                <th>Year</th>
                <th>Class Name</th>
                <th>Credit Hours</th>
                <th>Grade</th>
                <th>Remove Class</th>
              </tr>
            </thead>

            <tbody>
              {classes.map((course) => (
                <tr key={course.id}>
                  <td>
                    <input
                      required
                      type="text"
                      placeholder="Fall, Spring, Summer"
                      value={course.semester}
                      onChange={(e) => handleChange(course.id, 'semester', e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      required
                      type="number"
                      min="2000"
                      max="9999"
                      placeholder="Year"
                      value={course.year}
                      onChange={(e) => handleChange(course.id, 'year', e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      required
                      type="text"
                      placeholder="Class Name"
                      value={course.className}
                      onChange={(e) => handleChange(course.id, 'className', e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      required
                      type="number"
                      min="0"
                      max="99"
                      placeholder="CH"
                      value={course.creditHours}
                      onChange={(e) => handleChange(course.id, 'creditHours', e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      required
                      type="text"
                      placeholder="A, A-, B+, B..."
                      value={course.grade}
                      onChange={(e) => handleChange(course.id, 'grade', e.target.value)}
                    />
                  </td>

                  <td>
                    <button type="button" onClick={() => removeClass(course.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button type="submit">Submit</button>
          <button type="button" onClick={addClass}>Add Class</button>
        </form>
      </div>

      <div id="Final_calculation">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Final Calculation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Credit Hours</td>
              <td>{creditHours}</td>
            </tr>

            <tr>
              <td>GPA Points</td>
              <td>{gpaPoints.toFixed(2)}</td>
            </tr>

            <tr>
              <td>Active Credit Hours</td>
              <td>{activeCreditHours}</td>
            </tr>

            <tr>
              <td>Current GPA</td>
              <td>{gpa.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
