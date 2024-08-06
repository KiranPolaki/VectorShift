from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import json

app = FastAPI()

origins = [
    "http://localhost:3000", 
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

class Pipeline(BaseModel):
    nodes: List[str]
    edges: List[Dict[str, str]]

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    
    graph = {node: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        graph[edge['from']].append(edge['to'])
    
    def is_dag(graph):
        visited = set()
        stack = set()
        
        def visit(node):
            if node in stack:
                return False
            if node in visited:
                return True
            stack.add(node)
            for neighbor in graph[node]:
                if not visit(neighbor):
                    return False
            stack.remove(node)
            visited.add(node)
            return True
        
        return all(visit(node) for node in graph)
    
    is_dag_result = is_dag(graph)
    
    result = {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag_result}
    
    json_result = json.dumps(result)
    
    return json_result
