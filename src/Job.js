import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { Card, Badge, Button, Collapse } from 'react-bootstrap'

export default function Job({ job }) {
    const [open, setOpen] = useState(false)
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div className="mr-2">
                        <Card.Title>
                            {job.title} -
                            <span className="text-muted font-weight-light">
                                {job.company}
                            </span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">
                            {job.type}
                        </Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                        <div style={{ wordBreak: 'break-all' }}>
                            <ReactMarkdown source={job.how_to_apply} />
                        </div>
                    </div>
                    <img
                        src={job.company_logo}
                        alt={job.company}
                        className="d-none d-md-block"
                        height="50"
                    />
                </div>
                <Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => setOpen(prevOpen => !prevOpen)}
                    >
                        {open ? 'Hide details' : 'View details'}
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown source={job.description} />
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}
