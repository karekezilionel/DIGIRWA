const ProgressManager = {
  getUserEmail: function () {
    const userStr = localStorage.getItem("digirwa_user");
    if (!userStr) return null;
    try {
      return JSON.parse(userStr).email;
    } catch (e) {
      return null;
    }
  },

  getAllProgress: function () {
    try {
      return JSON.parse(localStorage.getItem("userProgress") || "{}");
    } catch (e) {
      return {};
    }
  },

  getUserProgress: function () {
    const email = this.getUserEmail();
    if (!email) return null;

    const allProgress = this.getAllProgress();

    if (!allProgress[email]) {
      allProgress[email] = {};
      localStorage.setItem("userProgress", JSON.stringify(allProgress));
    }

    return allProgress[email];
  },

  saveUserProgress: function (progress) {
    const email = this.getUserEmail();
    if (!email) return;

    const allProgress = this.getAllProgress();
    allProgress[email] = progress;

    localStorage.setItem("userProgress", JSON.stringify(allProgress));
  },

  completeLesson: function (courseId, lessonId) {
    const progress = this.getUserProgress();
    if (!progress) return;

    if (!progress[courseId]) {
      progress[courseId] = {
        completedLessons: [],
        quizScore: null
      };
    }

    if (!progress[courseId].completedLessons) {
      progress[courseId].completedLessons = [];
    }

    if (!progress[courseId].completedLessons.includes(lessonId)) {
      progress[courseId].completedLessons.push(lessonId);
      this.saveUserProgress(progress);
    }
  },

  saveQuizScore: function (courseId, score) {
    const progress = this.getUserProgress();
    if (!progress) return;

    if (!progress[courseId]) {
      progress[courseId] = {
        completedLessons: [],
        quizScore: null
      };
    }

    progress[courseId].quizScore = score;
    this.saveUserProgress(progress);
  },

  isCourseUnlocked: function (courseId) {
    const progress = this.getUserProgress();
    if (!progress) return false;

    if (!progress || Object.keys(progress).length === 0) {
      return true;
    }

    const courseKeys = Object.keys(progress);
    const currentIndex = courseKeys.indexOf(courseId);

    if (currentIndex <= 0) return true;

    const prevCourseId = courseKeys[currentIndex - 1];
    const prevProgress = progress[prevCourseId];

    if (!prevProgress) return false;

    return (
      prevProgress.quizScore !== null &&
      prevProgress.quizScore >= 50
    );
  },

  getCourseCompletionPercentage: function (courseId, totalLessons) {
    const progress = this.getUserProgress();

    if (!progress || !progress[courseId]) return 0;

    const courseProgress = progress[courseId];

    const completed = courseProgress.completedLessons
      ? courseProgress.completedLessons.length
      : 0;

    if (!totalLessons || totalLessons === 0) return 0;

    let percentage = Math.round((completed / totalLessons) * 100);

    if (percentage > 100) percentage = 100;

    return percentage;
  },

  getTotalScore: function (email) {
    const allProgress = this.getAllProgress();
    const userProg = allProgress[email];

    if (!userProg) return 0;

    let total = 0;

    for (const courseId in userProg) {
      if (userProg[courseId].quizScore) {
        total += userProg[courseId].quizScore;
      }
    }

    return total;
  },

  getAverageProgress: function (email) {
    return this.getTotalScore(email);
  }
};
window.ProgressManager = ProgressManager;