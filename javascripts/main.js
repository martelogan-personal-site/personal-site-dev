// Generated by CoffeeScript 1.12.7
(function() {
  $(document).ready(function() {
    var about, projects, resume, skills;
    $(document).on("go", function() {
      return $('.footer ul').fadeIn(260, function() {
        return $('.logo').fadeIn("slow", function() {
          return $('.nav').fadeIn("slow", function() {
            return $(document).trigger('done');
          });
        });
      });
    });
    $(".cmd").on('click', function() {
      var e, input;
      input = $('input#command').last();
      e = $.Event('keyup');
      e.which = 13;
      return input.val($(this).text()).focus().trigger(e);
    });
    $(document.body).click(function() {
      var input;
      input = $('input#command').last();
      return input.focus();
    });
    $('a#kitimat').on('mouseenter', function() {
      $('iframe#kitimat').show();
      return $('.shell .text').hide();
    });
    $('a#kitimat').on('mouseleave', function() {
      $('iframe#kitimat').hide();
      return $('.shell .text').show();
    });
    $('a#montreal').on('mouseenter', function() {
      $('iframe#montreal').show();
      return $('.shell .text').hide();
    });
    $('a#montreal').on('mouseleave', function() {
      $('iframe#montreal').hide();
      return $('.shell .text').show();
    });
    about = $('#about');
    projects = $('#projects');
    skills = $('#skills');
    resume = $('#resume');
    $(document).on('about', function() {
      $('.alternate').hide();
      if (about.hasClass('active')) {
        return;
      }
      if (skills.hasClass('active')) {
        skills.fadeOut('fast').removeClass('active');
        return setTimeout((function() {
          return about.fadeIn().addClass('active');
        }), 200);
      } else {
        return about.fadeIn().addClass('active');
      }
    });
    $(document).on('skills', function() {
      $('.alternate').hide();
      if (skills.hasClass('active')) {
        return;
      }
      if (about.hasClass('active')) {
        about.fadeOut('fast').removeClass('active');
        return setTimeout((function() {
          return skills.fadeIn().addClass('active');
        }), 200);
      } else {
        return skills.fadeIn().addClass('active');
      }
    });
    $(document).on('projects', function() {
      $('.alternate').hide();
      if (projects.hasClass('active')) {
        return;
      }
      if (resume.hasClass('active')) {
        resume.fadeOut('fast').removeClass('active');
        return setTimeout((function() {
          return projects.fadeIn().addClass('active');
        }), 200);
      } else {
        return projects.fadeIn().addClass('active');
      }
    });
    return $(document).on('resume', function() {
      $('.alternate').hide();
      if (resume.hasClass('active')) {
        return;
      }
      if (projects.hasClass('active')) {
        projects.fadeOut('fast').removeClass('active');
        return setTimeout((function() {
          return resume.fadeIn().addClass('active');
        }), 200);
      } else {
        return resume.fadeIn().addClass('active');
      }
    });
  });

}).call(this);
