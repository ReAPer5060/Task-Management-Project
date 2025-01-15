package com.spring.controller;

import com.spring.entity.Task;
import com.spring.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public Task createTask(@RequestBody Task task) {
    	System.out.println("%%%%%%");
        return taskService.createTask(task);
    }

    @GetMapping("/{userId}")
    public List<Task> getTasks(@PathVariable Long userId) {
    	System.out.println("%%%%%%");
        return taskService.getTasksByUser(userId);
    }
    @GetMapping("/all")
    public List<Task> getAllTasks() {
    	System.out.println("%%%%%%");
        return taskService.getAllTasks();
    }
    @PutMapping("/{taskId}")
    public Task updateTask(@PathVariable Long taskId, @RequestBody Task task) {
        return taskService.updateTask(taskId, task);
    }

    @DeleteMapping("/{taskId}")
    public void deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
    }
}
